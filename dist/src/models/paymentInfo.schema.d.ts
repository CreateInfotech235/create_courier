import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
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
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
    paymentThrough?: string;
    paymentCollectFrom?: string;
    wallet?: mongoose.Types.ObjectId;
    details?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;