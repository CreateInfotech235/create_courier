import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
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
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    type?: string;
    message?: string;
    amount?: number;
    personId?: mongoose.Types.ObjectId;
    userFlag?: string;
    availableBalance?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;