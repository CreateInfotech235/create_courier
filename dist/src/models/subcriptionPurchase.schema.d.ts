import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
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
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    merchant?: mongoose.Types.ObjectId;
    subcriptionId?: mongoose.Types.ObjectId;
    expiry?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
