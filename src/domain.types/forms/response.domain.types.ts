// import { FormStatus, QueryResponseType } from "../miscellaneous/system.types"

import { FormStatus, QueryResponseType } from "@prisma/client";

export interface ResponseCreateModel {
    FormId: string;
    FormTemplateId: string;
    QuestionId: String;
    ResponseType: QueryResponseType;
    IntegerValue: number;
    FloatValue: GLfloat;
    BooleanValue: boolean;
    DateTimeValue: Date;
    Url: string;
    FileResourceId: string;
    TextValue: string;
    // SubmissionTimestamp: Date;
    // LastSaveTimestamp: Date
    // CreatedAt: Date;
}

export interface ResponseUpdateModel {
    FormId?: string;
    FormTemplateId?: string;
    QuestionId?: String;
    ResponseType?: QueryResponseType;
    IntegerValue?: number;
    FloatValue?: GLfloat;
    BooleanValue?: boolean;
    DateTimeValue?: Date;
    Url?: string;
    FileResourceId?: string;
    TextValue?: string;
    // SubmissionTimestamp?: Date;
    // LastSaveTimestamp?: Date
    // CreatedAt?: Date;
}

export interface ResponseResponseDto {
    id: String;
    Form: {
        id: String;
        TemplateId: string;
        FormUrl: string;
        UserId: string;
        Status: FormStatus;
        SubmissionTimestamp: Date;
        CreatedAt: Date;
    }
    FormTemplate: {
        id: String;
        Title: String;
        Description: String;
        CurrentVersion: number;
        Type: String;
        DisplayCode: String;
        OwnerUserId: String;
        RootSectionId: String;
        DefaultSectionNumbering: Boolean
        CreatedAt: Date;
    }
    Question: {
        id: string;
        Title: string;
        Description: string;
        DisplayCode: string;
        ResponseType: QueryResponseType;
        Score: number;
        CorrectAnswer: String;
        Hint: String;
        TemplateId: string;
        SectionId: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }
    ResponseType: QueryResponseType;
    IntegerValue: number;
    FloatValue: GLfloat;
    BooleanValue: boolean;
    DateTimeValue: Date;
    Url: string;
    FileResourceId: string;
    TextValue: string;
    SubmissionTimestamp: Date;
    LastSaveTimestamp: Date
}

