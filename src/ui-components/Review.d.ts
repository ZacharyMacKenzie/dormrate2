/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Review } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewOverridesProps = {
    Review?: PrimitiveOverrideProps<ViewProps>;
    State?: PrimitiveOverrideProps<TextProps>;
    Review36572542?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    UniversityName?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ReviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    review?: Review;
} & {
    overrides?: ReviewOverridesProps | undefined | null;
}>;
export default function Review(props: ReviewProps): React.ReactElement;
