class Github {
    constructor() {
        this.client_id = 'c233473f40fd2767a71f';
        this.client_secret = 'e81a44ef4db01351497bb43c55865a0e6c17b27f';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';

    }

    async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return{
        // profile: profile /// ES5 format
        profile, ////ES6 format
        repos
    };

    }

}