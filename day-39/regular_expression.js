



// /character/gi
// /sh?amim/gi => ?(optional quantifier) => 0 or 1
// /sh?am.m/gi => .(Dot) => line break chara any character
// /sh?am+im/gi => +(Plus) => m 1 or more thakte pare
// /sh?am*im/gi => * => 0 or more
// \. (Escaping character)
//  /sh?am(mm)?im/gi => (grouping) => grouping kore optional kora hoyeche
// /sha(m){3}im/gi => m exact koyta hobe evabe bole deya jay
// /sha(m){3,}im/gi => m 3tar beshi hote pare
// /sha(m){3, 10}im/gi => m 3ta theke 10tar maje hote pare
// /hi|hey/gi => hi or hey ja pabe sob match korbe
// /\bhi\b|hey/gi => word boundary => mane h diye word start hobe i diye end hobe
// /\d/gi => shudu Digit select korbe
// /\D/gi => mane digit chara baki sobkichu
// /\w/gi => match any word character and underscore(a-zA-A0-9_)
// /\W/gi => Number, letter and underscore chara baki sobkichu
// /\s/gi => Matches any whitespace character(space, tab, line break)
// /\S/gi => Space chara baki sobkichu


// Range
// /[a-zA-Z0-9_]/ gi => Letter. number and underscore
// /[a-zA-Z0-9_]{8}/gi => 8 character er sob word match hobe
// /[\w]/gi => short hand
// /[\w]{8}/gi => 8 character er sob word match hobe

// /[0-9]/gi    or /[\d]/gi
// /[\D]/gi     or /[^\d]/gi
// /[a-zA-Z0-9_]/gi      or     /[\w]/gi
// /[^\w]/gi    /[\W]/gi
// /^samim$/gim => shuru hobe s diye end hobe m diye


// Capturing Group
// /sa(m)(m)\1\2im/gi => \1 er jaygay first (m) bosbe \2 er jaygay (m) bosbe

// Non Capturing Group
// /sa(?:mm)\1im/gi => \1 er jaygay m bosbe na

// Positive lookahead
// /sham(?=im)/gi => sham er pore exactly im thakle shudu oi word er sham select hobe

// Negative lookahead
// sham(?!im)/gi => sham er aage im na thakle shudu oi word er sham select hobe

// Greedy
// /s.+m/i

// Non Greedy
// /s.+?m/i








