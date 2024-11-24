import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    address: string;
    country: string;
    city: string;
    mobileNumber: string;
    email: string;
    postCode: string;
    trashed: boolean;
    firstName: string;
    lastName: string;
    createdByAdmin: boolean;
    location?: {
        type: string;
        coordinates: number[];
    };
    customerId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
