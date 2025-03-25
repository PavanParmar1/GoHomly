export let successFullFlag: number = 1;

export function changeSuccessFlag(value: number) {
  successFullFlag = value;
}

export const capitalizeFirstLetter = (string: string) => {
  return string?.length > 0 ? string[0].toUpperCase() + string.slice(1) : '';
};
