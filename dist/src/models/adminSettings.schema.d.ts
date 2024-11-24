import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    emailVerify: boolean;
    mobileNumberVerify: boolean;
    orderAutoAssign: boolean;
    personalAdminCommission: boolean;
    otpVerifyBothLocation: boolean;
    currency?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
