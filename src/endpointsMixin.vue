<script type="text/babel">
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        url: 'https://www.bungie.net/Platform',
        platform: '254'
      }
    },
    computed: {
      ...mapGetters({account: 'getAccount', membership: 'getDestinyMemberships'}),
    },
    methods: {
      getOptions() {
        return {
          headers: {
            'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem('accessToken'))}`
          }
        }
      },
      GetDestinyManifest() {
        return this.$http.get(`${this.url}/Destiny2/Manifest/`, this.getOptions());
      },
      SearchDestinyPlayer(membershipType, displayName) {
        return this.$http.get(`${this.url}/Destiny2/SearchDestinyPlayer/${this.membership[0].membershipType}/${this.account.displayName}/`, this.getOptions());
      },
      GetProfile(membershipType) {
        let headers = this.getOptions();
        headers.params = {
        components: '101,102,103,200,201,202,203,204,205,300,301,302,303,304,305,306,307,308,400,401,402,500'
        }
        return this.$http.get(`${this.url}/Destiny2/${this.membership[0].membershipType}/Profile/${this.membership[0].membershipId}/`, headers);
      },
      GetMembershipsById() {
        return this.$http.get(`${this.url}/User/GetMembershipsById/${this.account.membershipId}/254/`)
      },
      GetCharacter(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Profile/${this.account.membershipId}/Character/${characterId}/`, this.getOptions());
      },
      GetClanWeeklyRewardState(groupId) {
        return this.$http.get(`${this.url}/Destiny2/Clan/${groupId}/WeeklyRewardState/`, this.getOptions());
      },
      GetItem(membershipType, itemInstanceId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Profile/${this.account.membershipId}/Item/${itemInstanceId}/`, this.getOptions());
      },
      GetVendors(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Profile/${this.account.membershipId}/Character/${characterId}/Vendors/`, this.getOptions());
      },
      GetVendor(membershipType,  characterId, vendorHash) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Profile/${this.account.membershipId}/Character/${characterId}/Vendors/${vendorHash}/`, this.getOptions());
      },
      TransferItem() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/TransferItem/`, {}, this.getOptions());
      },
      EquipItem() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/EquipItem/`, {}, this.getOptions());
      },
      EquipItems() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/EquipItems/`, {}, this.getOptions());
      },
      SetItemLockState() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/SetLockState/`, {}, this.getOptions());
      },
      InsertSocketPlug() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/InsertSocketPlug/`, {}, this.getOptions());
      },
      ActivateTalentNode() {
        return this.$http.post(`${this.url}/Destiny2/Actions/Items/ActivateTalentNode/`, {}, this.getOptions());
      },
      GetPostGameCarnageReport(activityId) {
        return this.$http.get(`${this.url}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`, this.getOptions());
      },
      GetHistoricalStatsDefinition() {
        return this.$http.get(`${this.url}/Destiny2/Stats/Definition/`, this.getOptions());
      },
      GetClanLeaderboards(groupId) {
        return this.$http.get(`${this.url}/Destiny2/Stats/Leaderboards/Clans/${groupId}/`, this.getOptions());
      },
      GetClanAggregateStats(groupId) {
        return this.$http.get(`${this.url}/Destiny2/Stats/AggregateClanStats/${groupId}/`, this.getOptions());
      },
      GetLeaderboards(membershipType) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Stats/Leaderboards/`, this.getOptions());
      },
      GetLeaderboardsForCharacter(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/Stats/Leaderboards/${membershipType}/${this.account.membershipId}/${characterId}/`, this.getOptions());
      },
      SearchDestinyEntities(type, searchTerm) {
        return this.$http.get(`${this.url}/Destiny2/Armory/Search/${type}/${searchTerm}/`, this.getOptions());
      },
      GetHistoricalStats(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Character/${characterId}/Stats/`, this.getOptions());
      },
      GetHistoricalStatsForAccount(membershipType) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Stats/`, this.getOptions());
      },
      GetActivityHistory(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Character/${characterId}/Stats/Activities/`, this.getOptions());
      },
      GetUniqueWeaponHistory(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Character/${characterId}/Stats/UniqueWeapons/`, this.getOptions());
      },
      GetDestinyAggregateActivityStats(membershipType, characterId) {
        return this.$http.get(`${this.url}/Destiny2/${membershipType}/Account/${this.account.membershipId}/Character/${characterId}/Stats/AggregateActivityStats/`, this.getOptions());
      },
      GetPublicMilestoneContent() {
        return this.$http.get(`${this.url}/Destiny2/Milestones/${milestoneHash}/Content/`, this.getOptions());
      },
      GetPublicMilestones() {
        return this.$http.get(`${this.url}/Destiny2/Milestones/`, this.getOptions());
      },
      GetCurrentBungieNetUser() {
        return this.$http.get(`${this.url}/User/GetCurrentBungieNetUser/`, this.getOptions());
      },
      GetMembershipDataForCurrentUser() {
        return this.$http.get(`${this.url}/User/GetMembershipsForCurrentUser/`, this.getOptions());
      }
    }
  }
</script>
