/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, View } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Review } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReviewCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    universityName: "",
    buildingName: "",
    rating: "",
  };
  const [universityName, setUniversityName] = React.useState(
    initialValues.universityName
  );
  const [buildingName, setBuildingName] = React.useState(
    initialValues.buildingName
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUniversityName(initialValues.universityName);
    setBuildingName(initialValues.buildingName);
    setRating(initialValues.rating);
    setErrors({});
  };
  const validations = {
    universityName: [{ type: "Required" }],
    buildingName: [{ type: "Required" }],
    rating: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <View
      width="421px"
      height="350px"
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
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          universityName,
          buildingName,
          rating,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Review(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReviewCreateForm")}
      {...rest}
    >
      <TextField
        label="University name"
        isRequired={true}
        isReadOnly={false}
        value={universityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              universityName: value,
              buildingName,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.universityName ?? value;
          }
          if (errors.universityName?.hasError) {
            runValidationTasks("universityName", value);
          }
          setUniversityName(value);
        }}
        onBlur={() => runValidationTasks("universityName", universityName)}
        errorMessage={errors.universityName?.errorMessage}
        hasError={errors.universityName?.hasError}
        {...getOverrideProps(overrides, "universityName")}
      ></TextField>
      <TextField
        label="Building name"
        isRequired={true}
        isReadOnly={false}
        value={buildingName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              universityName,
              buildingName: value,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.buildingName ?? value;
          }
          if (errors.buildingName?.hasError) {
            runValidationTasks("buildingName", value);
          }
          setBuildingName(value);
        }}
        onBlur={() => runValidationTasks("buildingName", buildingName)}
        errorMessage={errors.buildingName?.errorMessage}
        hasError={errors.buildingName?.hasError}
        {...getOverrideProps(overrides, "buildingName")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={true}
        isReadOnly={false}
        value={rating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              universityName,
              buildingName,
              rating: value,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
    </View>

  );
}
