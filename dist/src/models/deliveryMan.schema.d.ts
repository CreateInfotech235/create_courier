import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
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
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    trashed: boolean;
    isCustomer: boolean;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByMerchant: boolean;
    createdByAdmin: boolean;
    address?: string;
    merchant?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    location?: {
        coordinates: any[];
        type?: string;
    };
    merchantId?: mongoose.Types.ObjectId;
    email?: string;
    postCode?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    contactNumber?: number;
    countryId?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    earning?: number;
    image?: string;
    providerId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
