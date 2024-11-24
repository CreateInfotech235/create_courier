import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
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
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    deliveryBoy?: mongoose.Types.ObjectId;
    merchant?: mongoose.Types.ObjectId;
    order?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
