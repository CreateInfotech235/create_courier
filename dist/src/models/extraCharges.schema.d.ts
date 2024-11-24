import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
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
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    cashOnDelivery: boolean;
    isCustomer: boolean;
    merchant?: mongoose.Types.ObjectId;
    country?: mongoose.Types.ObjectId;
    city?: mongoose.Types.ObjectId;
    title?: string;
    charge?: number;
    chargeType?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
