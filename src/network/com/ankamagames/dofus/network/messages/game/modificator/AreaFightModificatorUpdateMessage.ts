import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AreaFightModificatorUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9461;

	public spellPairId: number = 0;

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
        this.deserializeAs_AreaFightModificatorUpdateMessage(input);
    }

    private deserializeAs_AreaFightModificatorUpdateMessage(input: ICustomDataInput)
    {
        this._spellPairIdFunc(input);
    }

    private _spellPairIdFunc(input: ICustomDataInput)
    {
        this.spellPairId = input.readInt();
    }

}