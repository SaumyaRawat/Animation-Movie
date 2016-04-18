var speed : float = 3.0;
var rotateSpeed : float = 3.0;


	function Update() {
		transform.Translate(0,Time.deltaTime*speed,0);
	}


@script RequireComponent(CharacterController)