function isValid(s: string): boolean {
    if (s.length % 2 !== 0) {
      console.log(s.length % 2)
        return false;
    }

    if (s.slice(0, s.length / 2) !== s.slice(s.length / 2, s.length)) {
        return false;
    }

    return true;
};

isValid('()')
