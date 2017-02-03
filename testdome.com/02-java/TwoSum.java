
import java.util.Arrays;

public class TwoSum {
    public static int[] findTwoSum(int[] list, int sum) {
    	if (list == null || list.length < 2) {
    		return null;
    	}
    	int[] retVal = new int[]{-1,-1};
    	int sencondInt = 0;
    	
    	int[] innerList = Arrays.copyOf(list, list.length);
    	Arrays.sort(innerList);
    	for (int i = 0; i < list.length; i++) {
    		sencondInt = sum-list[i];
    		if (Arrays.binarySearch(innerList, sencondInt) >= 0) {
    			retVal[0] = i;
    			break;
    		}
    	}
    	if (retVal[0] != -1) {
        	for (int i = 0; i < list.length; i++) {
        		if (sencondInt == list[i]) {
        			retVal[1] = i;
        			break;
        		}
        	}
        	
        	return retVal;
    	} else {
    		return null;
    	}
    }

    public static void main(String[] args) {
        int[] indices = findTwoSum(new int[] { 1, 3, 5, 7, 9 }, 12);
        System.out.println(indices[0] + " " + indices[1]);
    }
}