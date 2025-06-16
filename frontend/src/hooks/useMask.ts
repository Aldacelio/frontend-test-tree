export const useMask = () => {
  const applyMask = (value: string, mask: string) => {
    if (!mask) return value;
    
    let result = '';
    let valueIndex = 0;
    
    for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
      if (mask[i] === '9') {
        if (/\d/.test(value[valueIndex])) {
          result += value[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else {
        result += mask[i];
        if (value[valueIndex] === mask[i]) {
          valueIndex++;
        }
      }
    }
    
    return result;
  };

  const removeMask = (value: string) => {
    return value.replace(/\D/g, '');
  };

  return { applyMask, removeMask };
};