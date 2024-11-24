import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
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
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    value?: number;
    expiry?: NativeDate;
    customerEmail?: string;
    customerMobile?: number;
    action?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
