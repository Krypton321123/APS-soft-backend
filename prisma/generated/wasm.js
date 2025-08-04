
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  username: 'username',
  password: 'password',
  untcd: 'untcd',
  stcd: 'stcd',
  stnm: 'stnm',
  untnm: 'untnm',
  usrnm: 'usrnm'
};

exports.Prisma.PartyImagesScalarFieldEnum = {
  image_id: 'image_id',
  partyId: 'partyId',
  createdAt: 'createdAt',
  imageUrl2: 'imageUrl2',
  imageUrl3: 'imageUrl3',
  profileImageUrl: 'profileImageUrl',
  userId: 'userId'
};

exports.Prisma.OrderScalarFieldEnum = {
  order_id: 'order_id',
  partyId: 'partyId',
  partyName: 'partyName',
  empId: 'empId',
  totalAmount: 'totalAmount',
  discountAmount: 'discountAmount',
  createdAt: 'createdAt',
  creditDays: 'creditDays',
  paymentMode: 'paymentMode',
  status: 'status',
  bulkRate: 'bulkRate',
  consumerRate: 'consumerRate'
};

exports.Prisma.AcceptedOrdersScalarFieldEnum = {
  accept_id: 'accept_id',
  order_id: 'order_id',
  createdAt: 'createdAt'
};

exports.Prisma.RejectedOrdersScalarFieldEnum = {
  reject_id: 'reject_id',
  order_id: 'order_id',
  createdAt: 'createdAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  itemCode: 'itemCode',
  itemName: 'itemName',
  quantity: 'quantity',
  rate: 'rate',
  amount: 'amount',
  packType: 'packType'
};

exports.Prisma.CollectionScalarFieldEnum = {
  collection_id: 'collection_id',
  partyId: 'partyId',
  partyName: 'partyName',
  empId: 'empId',
  amount: 'amount',
  paymentMethod: 'paymentMethod',
  chequeNumber: 'chequeNumber',
  chequeDate: 'chequeDate',
  bankName: 'bankName',
  upiId: 'upiId',
  transactionId: 'transactionId',
  createdAt: 'createdAt',
  verified: 'verified',
  verifiedAt: 'verifiedAt',
  imageUrl: 'imageUrl'
};

exports.Prisma.PartyEditRequestScalarFieldEnum = {
  request_id: 'request_id',
  partyId: 'partyId',
  partyName: 'partyName',
  empId: 'empId',
  updatedName: 'updatedName',
  updatedAddress: 'updatedAddress',
  updatedContactPerson: 'updatedContactPerson',
  updatedMobileNumber: 'updatedMobileNumber',
  updatedEmailId: 'updatedEmailId',
  shopImage1: 'shopImage1',
  shopImage2: 'shopImage2',
  status: 'status',
  adminComment: 'adminComment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockScalarFieldEnum = {
  stock_id: 'stock_id',
  partyId: 'partyId',
  partyName: 'partyName',
  empId: 'empId',
  createdAt: 'createdAt'
};

exports.Prisma.StockItemScalarFieldEnum = {
  id: 'id',
  stockId: 'stockId',
  itemCode: 'itemCode',
  itemName: 'itemName',
  quantity: 'quantity'
};

exports.Prisma.AdminScalarFieldEnum = {
  admin_id: 'admin_id',
  username: 'username',
  password: 'password'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  attendance_id: 'attendance_id',
  userId: 'userId',
  date: 'date',
  status: 'status',
  markedAt: 'markedAt',
  markedBy: 'markedBy',
  absentReason: 'absentReason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DailyRateListScalarFieldEnum = {
  rate_id: 'rate_id',
  untcd: 'untcd',
  date: 'date',
  bulkRate: 'bulkRate',
  consumerRate: 'consumerRate',
  createdAt: 'createdAt'
};

exports.Prisma.MstempScalarFieldEnum = {
  empcd: 'empcd',
  ledcd: 'ledcd',
  lednm: 'lednm'
};

exports.Prisma.MstpartyScalarFieldEnum = {
  ledcd: 'ledcd',
  lednm: 'lednm',
  empcd: 'empcd',
  areacd: 'areacd',
  areanm: 'areanm',
  ledadr1: 'ledadr1'
};

exports.Prisma.MstitmScalarFieldEnum = {
  rowid: 'rowid',
  itmcd: 'itmcd',
  itmnm: 'itmnm',
  pcksz: 'pcksz',
  wgtconv: 'wgtconv',
  itmsubcat: 'itmsubcat',
  itmcatgrp: 'itmcatgrp',
  lsitmnm: 'lsitmnm',
  itmrate: 'itmrate'
};

exports.Prisma.OutstandingAmtScalarFieldEnum = {
  ledcd: 'ledcd',
  outamt: 'outamt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  partyImages: 'partyImages',
  Order: 'Order',
  AcceptedOrders: 'AcceptedOrders',
  RejectedOrders: 'RejectedOrders',
  OrderItem: 'OrderItem',
  Collection: 'Collection',
  PartyEditRequest: 'PartyEditRequest',
  Stock: 'Stock',
  StockItem: 'StockItem',
  admin: 'admin',
  Attendance: 'Attendance',
  DailyRateList: 'DailyRateList',
  mstemp: 'mstemp',
  mstparty: 'mstparty',
  mstitm: 'mstitm',
  OutstandingAmt: 'OutstandingAmt'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
