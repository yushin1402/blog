import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

//プロジェクトのルートディレクトリとpostsフォルダを結合してpostsディレクトリを取得
const postsDirecroty = path.join(process.cwd(),"posts")

//mdファイルを取得
//export function getPostsData(){
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirecroty) //postsDirecory配下のファイル名一覧を配列で取得
    
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md/,""); //ファイル名を一つずつ取り出してidに格納

        //マークダウンを文字列として取り出す。
        const fullPath = path.join(postsDirecroty, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContent);
//        console.log(matterResult)

        //idとメタデータを返す
        return {
            id,
            ...matterResult.data,
        }
    });

    return allPostsData
}

//動的ルーティングのURLパス情報をgetStaticPath関数にreturnする。
export function getAllPostIds(){
    
    const fileNames = fs.readdirSync(postsDirecroty) //postsDirecory配下のファイル名一覧を配列で取得   
    const paths = fileNames.map( (fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md/,"")  //[id].jsと合わせてkeyを設定する。
            }
        }
    })
    console.log(paths)
    return paths

}

//URLパスに応じてマークダウンファイルの情報を取得する。
export async function getPostData(id) {
    const fullPath = path.join(postsDirecroty, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    console.log(`fileContentは${fileContent}`)

    const matterResult = matter(fileContent);
    const blogContent = await remark().use(html).process(matterResult.content);
    const blogContentHTML = blogContent.toString();
    console.log(`idは${id}`)
    console.log(`blogContentHTMLは${blogContentHTML}`)
    console.log({...matterResult.data})
    const result = {
        id,
        blogContentHTML,
        ...matterResult.data
    }
    console.log(result)
    return result;
    
}