/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function DormReview(props) {
  const { overrides, ...rest } = props;
  const submitButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <View
      width="421px"
      height="522px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DormReview")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="300"
        color="rgba(0,0,0,0.9)"
        lineHeight="60px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="418px"
        height="88.44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28px"
        left="-1px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dorm Review"
        {...getOverrideProps(overrides, "New Dorm")}
      ></Text>
      <TextAreaField
        width="355px"
        height="unset"
        label="Review"
        placeholder="Add review comments here"
        position="absolute"
        top="281px"
        left="31px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Review")}
      ></TextAreaField>
      <Button
        width="150px"
        height="40px"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="446px"
        left="222px"
        backgroundColor="rgba(119,202,133,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          submitButtonOnClick();
        }}
        {...getOverrideProps(overrides, "SubmitButton")}
      ></Button>
      <Button
        width="150px"
        height="40px"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="446px"
        left="43px"
        backgroundColor="rgba(191,64,64,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Clear"
        {...getOverrideProps(overrides, "ClearButton")}
      ></Button>
      <TextField
        width="356px"
        height="73px"
        label="Building Name"
        placeholder="Smith Hall"
        position="absolute"
        top="191px"
        left="30px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BuildingName")}
      ></TextField>
      <TextField
        width="355.42px"
        height="72px"
        label="University"
        placeholder="Harvard"
        position="absolute"
        top="103.44px"
        left="30.29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "UniversityName")}
      ></TextField>
    </View>
  );
}
