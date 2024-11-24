import mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
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
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isCustomer: boolean;
    pickupRequest: string;
    cancelCharge: number;
    minimumDistance: number;
    minimumWeight: number;
    perDistanceCharge: number;
    perWeightCharge: number;
    merchant?: mongoose.Types.ObjectId;
    cityId?: mongoose.Types.ObjectId;
    adminCommission?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Model;
