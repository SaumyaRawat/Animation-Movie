var speed : float = 3.0;
var rotateSpeed : float = 3.0;
var translation : float = Time.deltaTime;


	function Update() {
		translation += Time.deltaTime;

		if (translation > 10)
		{
			translation = 10;
		}
		else
		{
		transform.Translate(Time.deltaTime*speed,0,0);
		}

		if (Input.GetKeyDown ("space"))
			{
			Application.LoadLevel("Scene2");
			}
	}


@script RequireComponent(CharacterController)