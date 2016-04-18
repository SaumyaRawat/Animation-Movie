var speed : float = 3.0;
var rotateSpeed : float = 3.0;


	function Update() {
		transform.Translate(0,0,Time.deltaTime*-1*3);
	}


@script RequireComponent(CharacterController)