
def isAnagram(s, t):
    if ''.join(sorted(s)) == ''.join(sorted(t)):
        return True
    else:
        return False


print(isAnagram("anagram", "nagaram"))
