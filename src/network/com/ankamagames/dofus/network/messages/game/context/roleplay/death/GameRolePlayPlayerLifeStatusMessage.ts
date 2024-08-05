import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerLifeStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8693;

	public state: number = 0;
	public phenixMapId: number = 0;

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
        this.deserializeAs_GameRolePlayPlayerLifeStatusMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerLifeStatusMessage(input: ICustomDataInput)
    {
        this._stateFunc(input);
        this._phenixMapIdFunc(input);
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of GameRolePlayPlayerLifeStatusMessage.state.");
        }
    }

    private _phenixMapIdFunc(input: ICustomDataInput)
    {
        this.phenixMapId = input.readDouble();
        if(this.phenixMapId < 0 || this.phenixMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.phenixMapId + ") on element of GameRolePlayPlayerLifeStatusMessage.phenixMapId.");
        }
    }

}