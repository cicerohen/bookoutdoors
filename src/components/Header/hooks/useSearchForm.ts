import { useFormik, FormikConfig } from "formik";

export type Values = {
  date: string;
  location: string;
  passengers: string;
};

export const useSearchForm = ({
  onSubmit,
}: Pick<FormikConfig<Values>, "onSubmit">) => {
  return useFormik({
    initialValues: {
      date: "",
      location: "",
      passengers: "",
    },
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
