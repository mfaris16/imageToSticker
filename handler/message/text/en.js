exports.textTnC = () => {
    return `
By using this bot, you agree to the following Terms and Conditions:
- Author advises not to enter confidential ones, because Author still uses this wa number.
- The bot is not responsible for the stickers that you make from this bot as well as the videos, images and other data that you get from the source code / bot.
- Bots may not be used for services that aim / contribute to:
    • sex / human trafficking
    • gambling
    • harmful addictive behavior
    • crime
    • violence (unless necessary to protect public safety)
    • forest burning / deforestation
    • hate speech or discrimination based on age, sex, gender identity, race, sexuality, religion, nationality

Amnusa Tech

}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname || ''}! 👋️
Here are some of the features of this bot! ✨

Sticker Maker:
1. *#sticker*
To convert an image into a sticker, send the image with the caption #sticker or reply to the image that has been sent with #sticker.

2. *#stickers* _<Image Url>_
To change the image from the url to a sticker.

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
To turn a gif into a sticker (Giphy only)

Downloader:
1. *#tiktok* _<post / video url>_
Will return video tiktok.

2. *#fb* _<post / video url>_
Will return the Facebook video download link.

3. *#ig* _<post / video url>_
Will return the Instagram video download link.

4. *#twt* _<post / video url>_
Will return the Twitter video download link.

Etc:
1. *#tnc*
Displays Bot Terms and Conditions.

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are some of the group admin features included in this bot!

1. *#kick* @user
Removing members from the group (can be more than 1).

2. *#promote* @user
Promote members to group admins.

3. *#demote* @user
Demote Group admins.

3. *#tagall*
Mention of all group members.`
}
