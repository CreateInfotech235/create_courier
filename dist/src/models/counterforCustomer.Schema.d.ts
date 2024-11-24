import mongoose from 'mongoose';
declare const OrderCounter: mongoose.Model<{
    sequence_value: number;
    _id?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    sequence_value: number;
    _id?: string;
}> & {
    sequence_value: number;
    _id?: string;
} & Required<{
    _id: string;
}> & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    sequence_value: number;
    _id?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    sequence_value: number;
    _id?: string;
}>> & mongoose.FlatRecord<{
    sequence_value: number;
    _id?: string;
}> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export default OrderCounter;
