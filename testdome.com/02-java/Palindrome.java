public class Palindrome {
    public static boolean isPalindrome(String word) {
    	if (word == null || word.length() == 0) {
    		return false;
    	}
    	if (word.length() == 1) {
    		return true;
    	}
    	
    	String lowerWord = word.toLowerCase();
    	char[] chars = lowerWord.toCharArray();
    	char[] reversed = new char[chars.length];
    	for (int i = 0,j = chars.length-1; i < chars.length; i++,j--) {
    		reversed[i] = chars[j];
    	}
    	
    	return lowerWord.equals(String.valueOf(reversed));
    }
    
    public static void main(String[] args) {
        System.out.println(Palindrome.isPalindrome("Deleveled"));
    }
}