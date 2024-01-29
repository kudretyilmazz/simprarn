// Import Zod
import {z, defaultErrorMap, ZodIssueCode, ZodParsedType} from 'zod';

export const CustomErrorMapGenerator = (translator: any) => {
  const translate = (path: string | undefined, params?: string[]) => {
    return translator('VALIDATION.' + path, params);
  };

  const jsonStringifyReplacer = (_: string, value: any): any => {
    if (typeof value === 'bigint') {
      return value.toString();
    }
    return value;
  };

  function joinValues<T extends any[]>(array: T, separator = ' | '): string {
    return array
      .map(val => (typeof val === 'string' ? `'${val}'` : val))
      .join(separator);
  }

  const CustomErrorMap: z.ZodErrorMap = (issue, ctx) => {
    let message: string;
    message = defaultErrorMap(issue, ctx).message;

    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = translate('ERRORS.invalid_type_received_undefined');
        } else if (issue.received === ZodParsedType.null) {
          message = translate('ERRORS.invalid_type_received_null');
        } else {
          translate('ERRORS.invalid_type', [issue.expected, issue.received]);
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = translate('ERRORS.invalid_literal', [
          JSON.stringify(issue.expected, jsonStringifyReplacer),
        ]);

        break;
      case ZodIssueCode.unrecognized_keys:
        message = translate('ERRORS.unrecognized_keys', [
          joinValues(issue.keys, ', '),
        ]);

        break;
      case ZodIssueCode.invalid_union:
        message = translate('ERRORS.invalid_union');
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = translate('ERRORS.invalid_union_discriminator', [
          joinValues(issue.options),
        ]);
        break;
      case ZodIssueCode.invalid_enum_value:
        message = translate('ERRORS.invalid_enum_value', [
          joinValues(issue.options),
          `${issue.received}`,
        ]);
        break;
      case ZodIssueCode.invalid_arguments:
        message = translate('ERRORS.invalid_arguments');
        break;
      case ZodIssueCode.invalid_return_type:
        message = translate('ERRORS.invalid_return_type');
        break;

      case ZodIssueCode.invalid_date:
        message = translate('ERRORS.invalid_date');
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === 'object') {
          if ('startsWith' in issue.validation) {
            message = translate('ERRORS.invalid_string.startsWith', [
              issue.validation.startsWith,
            ]);
          } else if ('endsWith' in issue.validation) {
            message = translate('ERRORS.invalid_string.endsWith', [
              issue.validation.endsWith,
            ]);
          }
        } else {
          message = translate(`ERRORS.invalid_string.${issue.validation}`, [
            issue.validation,
          ]);
        }
        break;
      case ZodIssueCode.too_small:
        const minimum =
          issue.type === 'date'
            ? new Date(issue.minimum as number)
            : issue.minimum;
        message = translate(
          `ERRORS.too_small.${issue.type}.${
            issue.exact
              ? 'exact'
              : issue.inclusive
              ? 'inclusive'
              : 'not_inclusive'
          }`,
          [`${minimum}`],
        );
        break;
      case ZodIssueCode.too_big:
        const maximum =
          issue.type === 'date'
            ? new Date(issue.maximum as number)
            : issue.maximum;
        message = translate(
          `ERRORS.too_big.${issue.type}.${
            issue.exact
              ? 'exact'
              : issue.inclusive
              ? 'inclusive'
              : 'not_inclusive'
          }`,
          [`${maximum}`],
        );
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = translate('ERRORS.invalid_intersection_types');
        break;
      case ZodIssueCode.not_multiple_of:
        message = translate('ERRORS.not_multiple_of', [`${issue.multipleOf}`]);
        break;
      case ZodIssueCode.not_finite:
        message = translate('ERRORS.not_finite');
        break;
      default:
    }

    return {message};
  };

  return CustomErrorMap;
};
