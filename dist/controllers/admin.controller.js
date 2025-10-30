var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
export const adminLogin = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json(new ApiError("No username or password", 400));
        }
        const user = yield prisma.admin.findUnique({
            where: {
                username
            },
            select: {
                username: true, allowedLocations: true, allowedScreens: true, userType: true, password: true
            }
        });
        if (!user) {
            return res.status(409).json(new ApiError("User with this username doesn't exist", 409));
        }
        if (user.password !== password) {
            return res.status(409).json(new ApiError("Password not matched", 409));
        }
        return res.status(200).json(new ApiResponse(200, "User logged in successfully", user));
    }
    catch (err) {
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
export const getAllUsers = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.admin.findMany({
            select: {
                admin_id: true,
                username: true,
                userType: true,
                allowedScreens: true,
                allowedLocations: true,
                active: true,
                createdAt: true,
                updatedAt: true
            }
        });
        const parsedUsers = users.map(user => ({
            id: user.admin_id,
            username: user.username,
            role: user.userType,
            screens: user.allowedScreens ? JSON.parse(user.allowedScreens) : [],
            locations: user.allowedLocations ? JSON.parse(user.allowedLocations) : [],
            active: user.active,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }));
        return res.status(200).json(new ApiResponse(200, "Users fetched successfully", parsedUsers));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
export const getAvailableLocations = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield prisma.locationNames.findMany({
            select: {
                locationCode: true,
                locationName: true
            }
        });
        const formattedLocations = locations.map(loc => ({
            id: loc.locationCode,
            name: loc.locationName
        }));
        return res.status(200).json(new ApiResponse(200, "Locations fetched successfully", formattedLocations));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
export const getAvailableScreens = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const screens = [
            { id: 'orders', name: 'Orders' },
            { id: 'collections', name: 'Collections' },
            { id: 'attendance', name: 'Attendance' },
            { id: 'images', name: 'Images' },
            { id: 'ratelist', name: 'Rate List' },
            { id: 'location', name: 'Location' }
        ];
        return res.status(200).json(new ApiResponse(200, "Screens fetched successfully", screens));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
export const createUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, userType, screens, locations, active } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json(new ApiError("Username, and password are required", 400));
        }
        const existingUser = yield prisma.admin.findFirst({
            where: {
                OR: [
                    { username },
                ]
            }
        });
        if (existingUser) {
            return res.status(409).json(new ApiError("User with this username already exists", 409));
        }
        // Create user
        const newUser = yield prisma.admin.create({
            data: {
                username,
                password: password,
                userType: userType || 'OPERATOR',
                allowedScreens: JSON.stringify(screens || []),
                allowedLocations: JSON.stringify(locations || []),
                active: active !== undefined ? active : true
            }
        });
        // Parse and format response
        const formattedUser = {
            id: newUser.admin_id,
            username: newUser.username,
            role: newUser.userType,
            screens: JSON.parse(newUser.allowedScreens),
            locations: JSON.parse(newUser.allowedLocations),
            active: newUser.active
        };
        return res.status(201).json(new ApiResponse(201, "User created successfully", formattedUser));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
// Update user
export const updateUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin_id } = req.params;
    const { username, userType, screens, locations, active } = req.body;
    try {
        // Check if user exists
        const existingUser = yield prisma.admin.findUnique({
            where: { admin_id }
        });
        if (!existingUser) {
            return res.status(404).json(new ApiError("User not found", 404));
        }
        if (username) {
            const duplicateUser = yield prisma.admin.findFirst({
                where: {
                    AND: [
                        { admin_id: { not: admin_id } },
                        {
                            OR: [
                                { username: username || '' },
                            ]
                        }
                    ]
                }
            });
            if (duplicateUser) {
                return res.status(409).json(new ApiError("Username already exists", 409));
            }
        }
        // Update user
        const updatedUser = yield prisma.admin.update({
            where: { admin_id },
            data: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (username && { username })), (userType && { userType })), (screens && { allowedScreens: JSON.stringify(screens) })), (locations && { allowedLocations: JSON.stringify(locations) })), (active !== undefined && { active }))
        });
        const formattedUser = {
            id: updatedUser.admin_id,
            username: updatedUser.username,
            role: updatedUser.userType,
            screens: JSON.parse(updatedUser.allowedScreens),
            locations: JSON.parse(updatedUser.allowedLocations),
            active: updatedUser.active
        };
        return res.status(200).json(new ApiResponse(200, "User updated successfully", formattedUser));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
// Delete user
export const deleteUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin_id } = req.params;
    try {
        // Check if user exists
        const existingUser = yield prisma.admin.findUnique({
            where: { admin_id }
        });
        if (!existingUser) {
            return res.status(404).json(new ApiError("User not found", 404));
        }
        // Delete user
        yield prisma.admin.delete({
            where: { admin_id }
        });
        return res.status(200).json(new ApiResponse(200, "User deleted successfully", { admin_id }));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
// Get single user by ID
export const getUserById = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin_id } = req.params;
    try {
        const user = yield prisma.admin.findUnique({
            where: { admin_id },
            select: {
                admin_id: true,
                username: true,
                userType: true,
                allowedScreens: true,
                allowedLocations: true,
                active: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (!user) {
            return res.status(404).json(new ApiError("User not found", 404));
        }
        const formattedUser = {
            id: user.admin_id,
            username: user.username,
            role: user.userType,
            screens: JSON.parse(user.allowedScreens),
            locations: JSON.parse(user.allowedLocations),
            active: user.active,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
        return res.status(200).json(new ApiResponse(200, "User fetched successfully", formattedUser));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
// Search users
export const searchUsers = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.query;
    try {
        if (!query || typeof query !== 'string') {
            return res.status(400).json(new ApiError("Search query is required", 400));
        }
        const users = yield prisma.admin.findMany({
            where: {
                OR: [
                    { username: { contains: query } },
                ]
            },
            select: {
                admin_id: true,
                username: true,
                userType: true,
                allowedScreens: true,
                allowedLocations: true,
                active: true,
                createdAt: true,
                updatedAt: true
            }
        });
        const parsedUsers = users.map(user => ({
            id: user.admin_id,
            username: user.username,
            role: user.userType,
            screens: JSON.parse(user.allowedScreens),
            locations: JSON.parse(user.allowedLocations),
            active: user.active,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }));
        return res.status(200).json(new ApiResponse(200, "Search results", parsedUsers));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
