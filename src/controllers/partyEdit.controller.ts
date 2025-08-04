import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';

interface PartyEditRequestInput {
  partyId: string;
  partyName: string;
  empId: string;
  updatedName?: string;
  updatedAddress?: string;
  updatedContactPerson?: string;
  updatedMobileNumber?: string;
  updatedEmailId?: string;
  shopImage1?: string;
  shopImage2?: string;
}

// Create a new edit request
export const createPartyEditRequest = asyncHandler(async (req: Request, res: Response) => {
  const {
    partyId,
    partyName,
    empId,
    updatedName,
    updatedAddress,
    updatedContactPerson,
    updatedMobileNumber,
    updatedEmailId,
    shopImage1,
    shopImage2
  } = req.body as PartyEditRequestInput;

  // Validate required fields
  if (!partyId || !partyName || !empId) {
    return res.status(400).json(
      new ApiError("Missing required fields: partyId, partyName, and empId are required", 400, {})
    );
  }

  // Check if at least one field is being updated
  if (!updatedName && !updatedAddress && !updatedContactPerson && 
      !updatedMobileNumber && !updatedEmailId && !shopImage1 && !shopImage2) {
    return res.status(400).json(
      new ApiError("At least one field must be updated", 400, {})
    );
  }

  // Process images if provided
  let processedImage1 = shopImage1;
  let processedImage2 = shopImage2;

  if (shopImage1 && shopImage1.startsWith('data:image')) {
    processedImage1 = await saveImage(shopImage1, partyId, '1');
  }

  if (shopImage2 && shopImage2.startsWith('data:image')) {
    processedImage2 = await saveImage(shopImage2, partyId, '2');
  }

  try {
    // Create edit request in database
    const editRequest = await prisma.partyEditRequest.create({
      data: {
        partyId,
        partyName,
        empId,
        updatedName,
        updatedAddress,
        updatedContactPerson,
        updatedMobileNumber,
        updatedEmailId,
        shopImage1: processedImage1,
        shopImage2: processedImage2,
        status: "pending"
      }
    });

    return res.status(201).json(
      new ApiResponse(201, "Edit request submitted successfully", editRequest)
    );
  } catch (error) {
    console.error("Error creating edit request:", error);
    return res.status(500).json(
      new ApiError("Failed to submit edit request", 500, error)
    );
  }
});

// Get all edit requests (for admin panel)
export const getAllPartyEditRequests = asyncHandler(async (req: Request, res: Response) => {
  const { status } = req.query;
  
  const whereClause = status ? { status: status as string } : {};

  const editRequests = await prisma.partyEditRequest.findMany({
    where: whereClause,
    orderBy: {
      createdAt: 'desc'
    }
  });

  return res.status(200).json(
    new ApiResponse(200, "Edit requests fetched successfully", editRequests)
  );
});

// Get edit requests by employee ID
export const getPartyEditRequestsByEmpId = asyncHandler(async (req: Request, res: Response) => {
  const { empId } = req.params;

  if (!empId) {
    return res.status(400).json(
      new ApiError("Employee ID is required", 400, {})
    );
  }

  const editRequests = await prisma.partyEditRequest.findMany({
    where: {
      empId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return res.status(200).json(
    new ApiResponse(200, "Edit requests fetched successfully", editRequests)
  );
});

// Get edit requests by party ID
export const getPartyEditRequestsByPartyId = asyncHandler(async (req: Request, res: Response) => {
  const { partyId } = req.params;

  if (!partyId) {
    return res.status(400).json(
      new ApiError("Party ID is required", 400, {})
    );
  }

  const editRequests = await prisma.partyEditRequest.findMany({
    where: {
      partyId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return res.status(200).json(
    new ApiResponse(200, "Edit requests fetched successfully", editRequests)
  );
});

// Update edit request status (for admin approval/rejection)
export const updatePartyEditRequestStatus = asyncHandler(async (req: Request, res: Response) => {
  const { requestId } = req.params;
  const { status, adminComment } = req.body;

  if (!requestId || !status) {
    return res.status(400).json(
      new ApiError("Request ID and status are required", 400, {})
    );
  }

  if (status !== 'approved' && status !== 'rejected') {
    return res.status(400).json(
      new ApiError("Status must be either 'approved' or 'rejected'", 400, {})
    );
  }

  try {
    const updatedRequest = await prisma.partyEditRequest.update({
      where: {
        request_id: requestId
      },
      data: {
        status,
        adminComment,
        updatedAt: new Date()
      }
    });

    // If approved, you could implement logic here to apply the changes to the actual party record
    // This would depend on how your mstparty view is managed

    return res.status(200).json(
      new ApiResponse(200, `Edit request ${status}`, updatedRequest)
    );
  } catch (error) {
    console.error(`Error updating edit request status:`, error);
    return res.status(500).json(
      new ApiError("Failed to update edit request status", 500, error)
    );
  }
});

export const getOutstanding = asyncHandler(async (req: Request, res: Response) => {
  const { partyId } = req.body; 

  try {

    if (!partyId) {
      return res.status(400).json(new ApiError("Party id is missing", 400, {})); 
    }

    const outstanding = await prisma.outstandingAmt.findUnique({
      where: {
        ledcd: partyId
      }
    })

    if (!outstanding) {
      return res.status(403).json(new ApiError("Outstanidng not found", 403)); 
    }

    console.log(outstanding)

    return res.status(200).json(new ApiResponse(200, "Outstanding fetched successfully", outstanding))

  } catch (err) {
    console.log("Outstanding error:", err)
    return res.status(500).json(new ApiError("Internal Server Error", 500))
  }
})

// Helper function to save image
async function saveImage(base64Image: string, partyId: string, imageNumber: string): Promise<string> {
  // Decode base64 string
  const matches = base64Image.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid base64 image");
  }

  const extension = matches[1];
  const base64Data = matches[2];
  const filename = `${partyId}-edit-${imageNumber}-${Date.now()}.${extension}`;
  const dirPath = path.join("uploads", "party-edits");
  const filePath = path.join(dirPath, filename);

  // Ensure directory exists
  fs.mkdirSync(dirPath, { recursive: true });

  // Save the image file
  fs.writeFileSync(filePath, base64Data, { encoding: "base64" });

  return `/uploads/party-edits/${filename}`;
}

