import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
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
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string;
    charge?: number;
    productChargeId?: mongoose.Types.ObjectId;
    dayInMs?: number;
    dayNumber?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
