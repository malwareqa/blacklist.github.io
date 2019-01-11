////////////////////////////////////////////////////////////////////
// This function essentially takes 2 variables called file_path and
// searchstring and then returns true if it finds the word and 
// returns false.
function find_word(file_path,searchstring)
{
	var fso,f,s_SearchString,s_FilePath,s_FileContent;
	var ForReading = 1, ForWriting = 2, ForAppending =8;
	s_SearchString = /searchstring/i;
	//s_SearchString = new String(searchstring);
	s_FilePath = new String (file_path);
	fso = new ActiveXObject("Scripting.FileSystemObject");
	f = fso.OpenTextFile(s_FilePath , ForReading);
	s_FileContent = new String (f.ReadAll());
	if (s_FileContent.search(s_SearchString) == -1)
	{
		return false;
	}
	else
	{
		return true;
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// This Funtion takes 2 parameters filename and the content.
// It will open the file in the append mode and add the content to the
// End of the file and close it
function write_to_file (filename,content)
{
	var fso,f_OutFile;
	f_OutFile = new String (filename);
	var ForReading = 1, ForWriting = 2, ForAppending =8;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	try
	{
		f_OutFile = fso.OpenTextFile(f_OutFile,ForAppending,true);
		f_OutFile.Write (content);
		f_OutFile.Write ("\n");
		f_OutFile.Close();
	}
	catch (e)
	{
		WScript.Echo("Error Number" + e.number +"\n Error Description :--" + e.description);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// This function takes 2 parameters filename and ext. It checks if the filename has the ext that 
// has been specified.
function file_ext (filename,EXT)
{
	alert("The function file_ext is loaded onload of this page")
	var startpoint, endpoint, s_FileName, re;
	s_FileName = new String (filename);
	endpoint = s_FileName.length;
	startpoint = s_FileName.search (".") +1;
	if (s_FileName.substring(startpoint,endpoint).search(EXT)>0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////