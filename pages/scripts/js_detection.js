function sayHello()
	{
		alert("The function sayHello is loaded onload of this page")
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