var speed : float = 3.0;
var rotateSpeed : float = 3.0;


	function Update() {
		transform.Translate(Time.deltaTime,0,0);
	}


@script RequireComponent(CharacterController)