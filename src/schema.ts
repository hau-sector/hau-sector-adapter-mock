
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum VoteAnswer {
    AGREE = "AGREE",
    DISAGREE = "DISAGREE",
    AVOID = "AVOID"
}

export enum VoteStatus {
    NEW = "NEW",
    COMPLETED = "COMPLETED"
}

export enum MeterType {
    ENERGY = "ENERGY",
    WATER = "WATER",
    GAS = "GAS"
}

export enum IssueStatus {
    DONE = "DONE",
    PROGRESS = "PROGRESS",
    SENT = "SENT"
}

export interface CreateMeterDataInput {
    value: number;
    type: MeterType;
}

export interface UpdateMeterDataInput {
    value: number;
    type: MeterType;
}

export interface CreateIssueInput {
    title: string;
    content: string;
}

export interface CreateMessageInput {
    text: string;
}

export interface IQuery {
    myUser(): UserObject | Promise<UserObject>;
    myFlats(): FlatObject[] | Promise<FlatObject[]>;
    meterDatas(flatId: string, type: MeterType, start: string, end: string): MeterDataObject[] | Promise<MeterDataObject[]>;
    currentMeterData(flatId: string, type: MeterType): Nullable<MeterDataObject> | Promise<Nullable<MeterDataObject>>;
    paymentDatas(flatId: string, paid?: Nullable<boolean>, start?: Nullable<string>, end?: Nullable<string>): PaymentDataObject[] | Promise<PaymentDataObject[]>;
    news(buildingId: string): NewsObject[] | Promise<NewsObject[]>;
    issues(buildingId: string): IssueObject[] | Promise<IssueObject[]>;
    votes(buildingId: string): VoteObject[] | Promise<VoteObject[]>;
    contacts(buildingId: string): ContactObject[] | Promise<ContactObject[]>;
    messages(buildingId: string): MessageObject[] | Promise<MessageObject[]>;
}

export interface IMutation {
    createCurrentMeterData(flatId: string, payload?: Nullable<CreateMeterDataInput>): MeterDataObject | Promise<MeterDataObject>;
    updateCurrentMeterData(flatId: string, payload?: Nullable<UpdateMeterDataInput>): MeterDataObject | Promise<MeterDataObject>;
    createIssue(buildingId: string, payload?: Nullable<CreateIssueInput>): IssueObject | Promise<IssueObject>;
    createMessage(buildingId: string, payload?: Nullable<CreateMessageInput>): MessageObject | Promise<MessageObject>;
}

export interface UserObject {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    avatar: string;
}

export interface BuildingObject {
    id: string;
    street: string;
    house: string;
}

export interface FlatObject {
    id: string;
    flat: number;
    buildingId: string;
    building: BuildingObject;
}

export interface MeterDataObject {
    id: string;
    value: number;
    accepted: boolean;
    enteredAt: string;
    acceptedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    userId: string;
    flatId: string;
    flat: FlatObject;
    type: MeterType;
}

export interface NewsObject {
    id: string;
    title: string;
    content: string;
    image: string;
    publishedAt: string;
}

export interface IssueObject {
    id: string;
    title: string;
    content: string;
    status: IssueStatus;
    createdAt: string;
}

export interface VoteObject {
    id: string;
    title: string;
    content: string;
    status: VoteStatus;
    publishedAt: string;
    answer?: Nullable<VoteAnswer>;
}

export interface ContactObject {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    online: boolean;
    flat: number;
}

export interface MessageObject {
    id: string;
    text: string;
    mine: boolean;
    time: string;
    sender: ContactObject;
}

export interface VoteResultObject {
    id: string;
    agree?: Nullable<string>;
    disagree?: Nullable<string>;
    avoid?: Nullable<string>;
}

export interface PaymentDataObject {
    id: string;
    value: number;
    paid: boolean;
    paidAt: string;
    userId: string;
    flatId: string;
    flat: FlatObject;
}

type Nullable<T> = T | null;
