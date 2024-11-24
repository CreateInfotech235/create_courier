import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
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
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: string;
    isVerified: boolean;
    provider: string;
    language: string;
    createdByAdmin: boolean;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        postalCode?: string;
    };
    name?: string;
    country?: string;
    city?: string;
    email?: string;
    password?: string;
    contactNumber?: number;
    bankData?: {
        name?: string;
        accountNumber?: number;
        permanentBankName?: string;
        ifscCode?: string;
    };
    balance?: number;
    image?: string;
    providerId?: string;
    countryCode?: string;
    medicalCertificateNumber?: number;
    medicalCertificate?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
