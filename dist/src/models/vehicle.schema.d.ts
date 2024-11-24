import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
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
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    city: mongoose.Types.ObjectId[];
    isCustomer: boolean;
    cityType: string;
    description?: string;
    name?: string;
    merchant?: mongoose.Types.ObjectId;
    image?: string;
    capacity?: number;
    size?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
