
export class PostModel {
	public static postPublication = 1;
	public static sharePublication = 2;
	public static sponsoredPublication = 3;
	
	publisherImageUrl: string;
	publisherName: string;
	publicationType: number;
	publicationTime: number;
	publicationUrl: string;
	
	originalPublisherName: string;
	originalPublisherUrl: string;
	
	postImageUrl: string;
	postTitle: string;
	postContent: Array<string>;
	
	isFollowable: boolean;
	isFollowed: boolean;
	
	showMore: boolean;
	
	isPosted(): boolean {
		return this.publicationType === PostModel.postPublication;
	}
	
	isShared(): boolean {
		return this.publicationType === PostModel.sharePublication;
	}
	
	isSponsored(): boolean {
		return this.publicationType === PostModel.sponsoredPublication;
	}
	
	getFormattedTime(): string {
		var tempDate = new Date(this.publicationTime);
		var formattedDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
		var minutes = tempDate.getMinutes();
		var formattedTime = tempDate.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes);
		
		return formattedDate + ' ' + formattedTime;
	}
}

