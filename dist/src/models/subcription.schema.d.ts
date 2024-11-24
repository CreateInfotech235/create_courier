import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
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
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    features: any[];
    isActive: boolean;
    type?: string;
    amount?: number;
    discount?: number;
    seconds?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
