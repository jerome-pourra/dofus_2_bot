import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaRegisterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2855;

	public arenaType: number = 3;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaRegisterMessage(input);
    }

    private deserializeAs_GameRolePlayArenaRegisterMessage(input: ICustomDataInput)
    {
        this._arenaTypeFunc(input);
    }

    private _arenaTypeFunc(input: ICustomDataInput)
    {
        this.arenaType = input.readInt();
        if(this.arenaType < 0)
        {
            throw new Error("Forbidden value (" + this.arenaType + ") on element of GameRolePlayArenaRegisterMessage.arenaType.");
        }
    }

}