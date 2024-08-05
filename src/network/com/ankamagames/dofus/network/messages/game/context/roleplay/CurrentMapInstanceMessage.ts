import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CurrentMapMessage } from "./CurrentMapMessage";

export class CurrentMapInstanceMessage extends CurrentMapMessage
{

	public static readonly protocolId: number = 5476;

	public instantiatedMapId: number = 0;

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
        this.deserializeAs_CurrentMapInstanceMessage(input);
    }

    private deserializeAs_CurrentMapInstanceMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._instantiatedMapIdFunc(input);
    }

    private _instantiatedMapIdFunc(input: ICustomDataInput)
    {
        this.instantiatedMapId = input.readDouble();
        if(this.instantiatedMapId < 0 || this.instantiatedMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.instantiatedMapId + ") on element of CurrentMapInstanceMessage.instantiatedMapId.");
        }
    }

}