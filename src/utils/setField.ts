// eslint-disable-next-line import/prefer-default-export
export function setField<T>(
  object: T,
  field: string,
  value: any,
  setObject: React.Dispatch<React.SetStateAction<T>>,
) {
  setObject({
    ...object,
    [field]: value,
  });
}
