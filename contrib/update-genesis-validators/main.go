package main

import (
	"github.com/fury-labs/fury/app"
	"github.com/incubus-network/futool/contrib/update-genesis-validators/cmd"
)

func main() {
	app.SetSDKConfig()
	cmd.Execute()
}
