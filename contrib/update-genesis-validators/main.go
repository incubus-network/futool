package main

import (
	"github.com/kava-labs/kava/app"
	"github.com/incubus-network/futool/contrib/update-genesis-validators/cmd"
)

func main() {
	app.SetSDKConfig()
	cmd.Execute()
}
