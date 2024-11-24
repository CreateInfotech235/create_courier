import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
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
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    language: string;
    name?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    balance?: number;
    countryCode?: string;
    profileImage?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
