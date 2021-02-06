const readLineSync=require('readline-sync');
//const readLineSync=require('readline-sync');

function base64Encode(url)
{
  return Buffer.from(url).toString('base64');
}

function base64Decode(url)
{
  return Buffer.from(url,'base64').toString('ascii');
}


function logic(selectOption,url)
{
  switch(selectOption)
  {
    case 1:
        const encoded=base64Encode(url);
        console.log(`\nThe Encoded URL for given \"${url}\"  :\n ${encoded}`);
    break;
    case 2:
        const decoded=base64Decode(url);
        console.log(`\nThe Decoded URL for given \"${url} \" :  \n${decoded}`);
    break;
    default:
    console.log("You have given invalid URL");
  }
}



const selectOption=parseInt(readLineSync.question('           Welcome To  URL Base 64 Encoding/Decoding Application.\n\n Select the option you want utilize:\n1)Base64 Encode\n2)Base64 Decode\n Enter you choice : '));


if(selectOption===1 || selectOption===2)
{
  const url=readLineSync.question('Enter the URL: ');
  console.log(`You opted : ${selectOption}`);

  logic(selectOption,url);
}
else
console.log("You have choosen \'WRONG OPTION\' choose options [1] or [2]");

