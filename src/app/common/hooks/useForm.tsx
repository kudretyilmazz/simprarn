'use client';

// Import React
import {useState, useCallback} from 'react';

// Import Zod
import {z} from 'zod';
import type {ZodSchema} from 'zod';

// Types
export type FormControlType = {
  onChange: (key: string, value: unknown) => void;
  values: Record<string, any>;
  errors: Record<string, string | undefined>;
};

type configType = {
  schema: ZodSchema<unknown>;
  initialValues?: Record<string, any>;
  onValuesChange?: (
    key: string,
    value: unknown,
    formData?: Record<string, any>,
  ) => Record<string, any>;
};

function useForm(config: configType) {
  // Config Destruction
  const {schema, initialValues, onValuesChange} = config;

  // useStates
  const [formData, setFormData] = useState(initialValues ?? {});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  // Actions
  const handleSubmit = (handler: (values: z.infer<typeof schema>) => void) => {
    const results = schema.safeParse(formData);

    if (results.success) {
      handler(results.data);
    } else {
      // Format Errors
      let formattedErrors: any = {};
      const zodErrors: any = results.error.format();
      Object.keys(zodErrors).forEach((fieldName: string) => {
        if (fieldName !== '_errors') {
          formattedErrors[fieldName] = zodErrors?.[fieldName]?._errors?.[0];
        }
      });

      setErrors(formattedErrors);
    }
  };

  const clearErrorByKey = useCallback(
    (name: string) => {
      if (errors[name]) {
        setErrors(prev => ({...prev, [name]: undefined}));
      }
    },
    [errors],
  );

  const onChange = useCallback(
    (key: string, value: unknown) => {
      clearErrorByKey(key);

      if (onValuesChange) {
        const newValues = onValuesChange(key, value, formData);
        setFormData(newValues);
      } else {
        setFormData(prev => ({...prev, [key]: value}));
      }
    },
    [clearErrorByKey, onValuesChange, formData],
  );

  const setError = (name: string, message: string) => {
    setErrors(prev => ({...prev, [name]: message}));
  };

  const control: FormControlType = {
    onChange: onChange,
    values: formData,
    errors: errors,
  };

  const setFormValues = (values: Record<string, any>) => setFormData(values);

  return {
    handleSubmit,
    errors,
    data: formData,
    onChange,
    setError,
    clearError: clearErrorByKey,
    control,
    setFormValues,
  };
}

export default useForm;
