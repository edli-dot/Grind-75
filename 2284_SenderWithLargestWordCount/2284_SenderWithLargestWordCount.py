class Solution:
    def largestWordCount(self, messages: List[str], senders: List[str]) -> str:
        word_count = {}
        #word_count = defaultdict(int)
        # this provides a default value for nonexistent keys to avoid KeyERror. 
        #when you access a key that does not exist tin the dictionary, it will automatically intiilize with the default value of int()
        for i in range(len(messages)):
            count = len(messages[i].split())
            word_count[senders[i]] = word_count.get(senders[i], 0) + count
        
        maxWordCount = 0
        maxSender = ""
        
        for sender, count in word_count.items():
            if count > maxWordCount or (count == maxWordCount and sender > maxSender):
                maxWordCount = count
                maxSender = sender
        return maxSender