/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Review } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Divider, Text, View } from "@aws-amplify/ui-react";
export default function Review1(props) {
  const { review, overrides, ...rest } = props;
  const buttonOnClick = useDataStoreDeleteAction({
    model: Review,
    id: review?.id,
    schema: schema,
  });
  return (
    <View
      width="814px"
      height="302px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Review")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="247.4px"
        height="26.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.48%"
        bottom="72.78%"
        left="3.66%"
        right="65.95%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={review?.buildingName}
        {...getOverrideProps(overrides, "State")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="746px"
        height="163px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="38.74%"
        bottom="7.28%"
        left="3.93%"
        right="4.42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={review?.rating}
        {...getOverrideProps(overrides, "Review36572542")}
      ></Text>
      <Divider
        width="813px"
        height="20px"
        position="absolute"
        top="26.49%"
        bottom="66.89%"
        left="0.12%"
        right="0%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,0.9)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="550px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="3.81%"
        bottom="78.97%"
        left="3.38%"
        right="29.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={review?.universityName}
        {...getOverrideProps(overrides, "UniversityName")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="79.47%"
        bottom="7.28%"
        left="86.36%"
        right="3.44%"
        backgroundColor="rgba(191,64,64,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
