export function question01(
  ordernatedArray: number[],
  targetNumber: number,
  low = 0,
  high = ordernatedArray.length - 1
) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);

  if (ordernatedArray[mid] === targetNumber) {
    return mid;
  }

  if (!ordernatedArray[mid]) {
    return -1;
  }

  if (ordernatedArray[mid] > targetNumber) {
    return question01(ordernatedArray, targetNumber, low, mid - 1);
  } else {
    return question01(ordernatedArray, targetNumber, mid + 1, high);
  }
}

export function question02(
  ordernatedArray: number[],
  low = 0,
  high = ordernatedArray.length - 1
): number {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (ordernatedArray[mid] === mid) {
    return mid;
  }

  if (!ordernatedArray[mid]) {
    return -1;
  }

  if (ordernatedArray[mid] > mid) {
    return question02(ordernatedArray, low, mid - 1);
  } else {
    return question02(ordernatedArray, mid + 1, high);
  }
}

export function question03(str: string): string {
  if (str.length <= 1) {
    return str;
  }

  const mid = Math.floor(str.length / 2);
  const leftPart = str.slice(0, mid);
  const rightPart = str.slice(mid, str.length);

  return question03(rightPart) + question03(leftPart);
}

export function question04(
  arr: number[],
  low = 0,
  high = arr.length - 1
): number | null {
  if (low === high) {
    return arr[low] ?? null;
  }

  const mid = Math.floor((low + high) / 2);

  const leftMajority = question04(arr, low, mid);
  const rightMajority = question04(arr, mid + 1, high);

  if (leftMajority === rightMajority) {
    return leftMajority;
  }

  let leftCount = 0;
  let rightCount = 0;

  for (let i = low; i <= high; i++) {
    if (leftMajority !== null && arr[i] === leftMajority) leftCount++;
    if (rightMajority !== null && arr[i] === rightMajority) rightCount++;
  }

  const majorityThreshold = (high - low + 1) / 2;

  if (leftCount > majorityThreshold) return leftMajority;
  if (rightCount > majorityThreshold) return rightMajority;

  return null;
}
