/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DormReviewOverridesProps = {
    DormReview?: PrimitiveOverrideProps<ViewProps>;
    "New Dorm"?: PrimitiveOverrideProps<TextProps>;
    Review?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    ClearButton?: PrimitiveOverrideProps<ButtonProps>;
    BuildingName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DormReviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DormReviewOverridesProps | undefined | null;
}>;
export default function DormReview(props: DormReviewProps): React.ReactElement;
