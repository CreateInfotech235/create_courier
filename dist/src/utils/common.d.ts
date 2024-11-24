import { Types } from 'mongoose';
import { TRANSACTION_TYPE } from '../enum';
import { encryptPasswordParams } from './types/expressTypes';
export declare const sendMailService: (to: string, subject: string, text: string) => Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
export declare const passwordValidation: (password: string, hashPassword: string) => Promise<boolean>;
export declare const encryptPassword: ({ password }: encryptPasswordParams) => Promise<string>;
export declare const generateIntRandomNo: (start?: number, end?: number) => number;
export declare const uploadFile: (fileName: string, base64FormatImage: string, fileType: string) => Promise<string>;
export declare const removeUploadedFile: (fileName: string) => void;
export declare const createAuthTokens: (id: Types.ObjectId) => {
    accessToken: string;
    refreshToken: string;
};
export declare const emailOrMobileOtp: (email: string, message: string) => Promise<void>;
export declare const updateWallet: (amount: number, adminId: string, personId: string, transactionType: TRANSACTION_TYPE, transactionMessage: string, isCustomer?: boolean) => Promise<void>;
export declare const getMongoCommonPagination: ({ pageCount, pageLimit, }: IPagination) => ({
    $facet: {
        count: {
            $count: string;
        }[];
        data: ({
            $skip: number;
            $limit?: undefined;
        } | {
            $limit: number;
            $skip?: undefined;
        })[];
    };
    $project?: undefined;
} | {
    $project: {
        totalDataCount: {
            $ifNull: (number | {
                $arrayElemAt: (string | number)[];
            })[];
        };
        data: number;
    };
    $facet?: undefined;
})[];
